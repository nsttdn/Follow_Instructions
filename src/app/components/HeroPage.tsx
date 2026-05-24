import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import logoBlack from '../../imports/logo_black.png';

interface HeroPageProps {
  onStart: () => void;
}

export function HeroPage({ onStart }: HeroPageProps) {
  return (
    <div className="min-h-screen bg-[#0a0e27] flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-[600px] flex flex-col items-center text-center space-y-12">
        <div className="space-y-4">
          <h1 className="text-[28px] font-bold text-white">
            Welcome to Patreon Merch Hub
          </h1>
          <p className="text-[16px] text-white/90 leading-relaxed">
            Patreon is a platform connecting creators and supporters. Creators earn from subscriptions and merchandise. Patrons access exclusive content and merch.
          </p>
        </div>

        <div className="py-8">
          <ImageWithFallback
            src={logoBlack}
            alt="Patreon Logo"
            className="h-[120px] md:h-[150px] w-auto invert"
          />
        </div>

        <Button
          onClick={onStart}
          className="w-full h-[56px] md:h-[48px] bg-[#8b5cf6] hover:bg-[#7c3aed] text-white text-[16px] font-semibold rounded-xl transition-all duration-200 hover:shadow-[0_4px_12px_rgba(139,92,246,0.3)] active:bg-[#6d28d9] active:scale-98"
        >
          START QUIZ
        </Button>
      </div>
    </div>
  );
}
