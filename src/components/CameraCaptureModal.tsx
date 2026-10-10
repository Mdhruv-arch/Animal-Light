import React, { useRef, useState, useEffect } from 'react';
import { Camera, X, RefreshCw, AlertCircle, Image as ImageIcon } from 'lucide-react';
import { soundService } from '../services/soundService';

interface CameraCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCapture: (imageDataUrl: string) => void;
}

export const CameraCaptureModal: React.FC<CameraCaptureModalProps> = ({
  isOpen,
  onClose,
  onCapture
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fallbackFileRef = useRef<HTMLInputElement>(null);

  const [stream, setStream] = useState<MediaStream | null>(null);
  const [facingMode, setFacingMode] = useState<'environment' | 'user'>('environment');
  const [cameraError, setCameraError] = useState<string | null>(null);
  const [isShutterActive, setIsShutterActive] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      startCamera();
    } else {
      stopCamera();
    }
    return () => {
      stopCamera();
    };
  }, [isOpen, facingMode]);

  const startCamera = async () => {
    setCameraError(null);
    stopCamera();

    try {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        throw new Error('Camera access is not supported by your browser.');
      }

      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: { ideal: facingMode },
          width: { ideal: 1280 },
          height: { ideal: 720 }
        },
        audio: false
      });

      setStream(mediaStream);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
        videoRef.current.play().catch(() => {});
      }
    } catch (err: any) {
      console.warn('Camera stream error:', err);
      setCameraError(
        err.name === 'NotAllowedError'
          ? 'Camera permission denied. You can allow camera in browser settings or use the file upload button.'
          : 'Unable to start camera stream. Use direct camera file capture below.'
      );
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      setStream(null);
    }
  };

  const flipCamera = () => {
    soundService.playClick();
    setFacingMode((prev) => (prev === 'environment' ? 'user' : 'environment'));
  };

  const capturePhoto = () => {
    if (!videoRef.current) return;
    const video = videoRef.current;

    soundService.playCameraShutter();
    setIsShutterActive(true);

    const canvas = canvasRef.current || document.createElement('canvas');
    canvas.width = video.videoWidth || 640;
    canvas.height = video.videoHeight || 480;

    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      const dataUrl = canvas.toDataURL('image/jpeg', 0.92);
      setTimeout(() => {
        setIsShutterActive(false);
        stopCamera();
        onCapture(dataUrl);
      }, 200);
    }
  };

  const handleFallbackFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          stopCamera();
          onCapture(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between items-center p-4">
      {/* Hidden canvas & fallback file picker with mobile capture */}
      <canvas ref={canvasRef} className="hidden" />
      <input
        type="file"
        ref={fallbackFileRef}
        accept="image/*"
        capture="environment"
        onChange={handleFallbackFile}
        className="hidden"
      />

      {/* Top Header */}
      <div className="w-full max-w-md flex items-center justify-between z-10 pt-2">
        <button
          onClick={() => {
            soundService.playClick();
            stopCamera();
            onClose();
          }}
          className="w-10 h-10 rounded-full bg-emerald-950/80 border border-emerald-700/50 flex items-center justify-center text-white cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <span className="text-xs font-bold text-lime-400 tracking-wider uppercase flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-lime-400 animate-ping" />
          Camera Viewfinder
        </span>

        <button
          onClick={flipCamera}
          className="w-10 h-10 rounded-full bg-emerald-950/80 border border-emerald-700/50 flex items-center justify-center text-emerald-300 hover:text-white cursor-pointer"
          title="Switch front/rear camera"
        >
          <RefreshCw className="w-4 h-4" />
        </button>
      </div>

      {/* Center Viewfinder */}
      <div className="relative w-full max-w-sm aspect-[3/4] rounded-3xl overflow-hidden bg-emerald-950/40 border-2 border-lime-400/40 my-auto flex items-center justify-center">
        {/* Flash animation */}
        {isShutterActive && (
          <div className="absolute inset-0 bg-white z-40 transition-opacity duration-150" />
        )}

        {cameraError ? (
          <div className="p-6 text-center space-y-4 max-w-xs">
            <AlertCircle className="w-10 h-10 text-amber-400 mx-auto" />
            <p className="text-xs text-emerald-200">{cameraError}</p>
            <button
              onClick={() => fallbackFileRef.current?.click()}
              className="py-2.5 px-4 rounded-full bg-lime-400 text-emerald-950 font-bold text-xs uppercase cursor-pointer"
            >
              Open Camera via Native App
            </button>
          </div>
        ) : (
          <>
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className="w-full h-full object-cover"
            />

            {/* Target Reticles */}
            <div className="absolute inset-8 border border-lime-400/30 rounded-2xl pointer-events-none">
              <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-lime-400 rounded-tl-sm" />
              <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-lime-400 rounded-tr-sm" />
              <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-lime-400 rounded-bl-sm" />
              <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-lime-400 rounded-br-sm" />
            </div>

            <div className="absolute bottom-4 inset-x-0 text-center pointer-events-none">
              <span className="text-[11px] bg-black/60 px-3 py-1 rounded-full text-emerald-200 border border-emerald-700/50">
                Align animal in frame
              </span>
            </div>
          </>
        )}
      </div>

      {/* Bottom Controls */}
      <div className="w-full max-w-md flex items-center justify-around z-10 pb-6">
        {/* Fallback to gallery */}
        <button
          onClick={() => fallbackFileRef.current?.click()}
          className="w-12 h-12 rounded-full bg-emerald-950/70 border border-emerald-800 flex items-center justify-center text-emerald-300 hover:text-white cursor-pointer"
          title="Upload from device gallery"
        >
          <ImageIcon className="w-5 h-5" />
        </button>

        {/* Shutter Button */}
        <button
          onClick={capturePhoto}
          disabled={Boolean(cameraError)}
          aria-label="Capture photo"
          className="w-18 h-18 rounded-full border-4 border-white/80 p-1 flex items-center justify-center cursor-pointer hover:scale-105 active:scale-95 transition-all shadow-xl shadow-lime-500/20 disabled:opacity-40"
        >
          <div className="w-full h-full rounded-full bg-gradient-to-tr from-emerald-500 to-lime-400" />
        </button>

        <div className="w-12 h-12" />
      </div>
    </div>
  );
};
