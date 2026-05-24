import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowLeft } from 'lucide-react';
import logoBlack from '../../imports/logo_black.png';

interface InfoPageProps {
  onContinue: () => void;
  onBack: () => void;
}

export function InfoPage({ onContinue, onBack }: InfoPageProps) {
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
        <div className="max-w-[600px] mx-auto space-y-8">
          <div className="space-y-2 text-center">
            <h1 className="text-[28px] font-bold text-white">What is Patreon?</h1>
            <p className="text-[16px] text-[#6b7280]">A platform connecting creators and supporters</p>
          </div>

          <div className="space-y-6">
            <div className="bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 rounded-xl p-6 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-4xl">🎬</span>
                <h2 className="text-[20px] font-semibold text-white">For Creators</h2>
              </div>
              <div className="space-y-2 text-[14px] text-white/90">
                <p>✓ Set membership tiers with exclusive perks</p>
                <p>✓ Sell custom merchandise directly to fans</p>
                <p>✓ Earn consistent monthly income</p>
              </div>
            </div>

            <div className="bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 rounded-xl p-6 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-4xl">🛍️</span>
                <h2 className="text-[20px] font-semibold text-white">For Patrons</h2>
              </div>
              <div className="space-y-2 text-[14px] text-white/90">
                <p>✓ Support creators you love</p>
                <p>✓ Get exclusive content & behind-the-scenes access</p>
                <p>✓ Buy unique merch not available elsewhere</p>
              </div>
            </div>
          </div>

          <Button
            onClick={onContinue}
            className="w-full h-[56px] md:h-[48px] bg-[#8b5cf6] hover:bg-[#7c3aed] text-white text-[16px] font-semibold rounded-xl transition-all duration-200"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
