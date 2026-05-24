import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowLeft } from 'lucide-react';
import logoBlack from '../../imports/logo_black.png';

interface BenefitsCardProps {
  title: string;
  benefits: string[];
  onContinue: () => void;
  onBack: () => void;
}

export function BenefitsCard({ title, benefits, onContinue, onBack }: BenefitsCardProps) {
  return (
    <div className="min-h-screen bg-[#0a0e27]">
      <header className="sticky top-0 z-10 bg-[#0a0e27] border-b border-[#8b5cf6]/20 px-4 py-4">
        <div className="max-w-[600px] mx-auto flex items-center justify-between">
          <button onClick={onBack} className="text-white p-2">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <ImageWithFallback
            src={logoBlack}
            alt="Patreon"
            className="h-[40px] w-auto invert"
          />
          <div className="w-10"></div>
        </div>
      </header>

      <div className="px-4 py-8 md:py-12">
        <div className="max-w-[600px] mx-auto space-y-6">
          <div className="bg-[#8b5cf6] rounded-xl p-6 space-y-4">
            <h2 className="text-[20px] font-semibold text-white">{title}</h2>
            <div className="space-y-2">
              {benefits.map((benefit, index) => (
                <p key={index} className="text-[14px] text-white/90">✓ {benefit}</p>
              ))}
            </div>
          </div>

          <Button
            onClick={onContinue}
            className="w-full h-[56px] md:h-[48px] bg-[#8b5cf6] hover:bg-[#7c3aed] text-white text-[16px] font-semibold rounded-xl transition-all duration-200"
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}
