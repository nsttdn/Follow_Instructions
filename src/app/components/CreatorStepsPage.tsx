import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import logoBlack from '../../imports/logo_black.png';

interface CreatorStepsPageProps {
  onContinue: () => void;
}

export function CreatorStepsPage({ onContinue }: CreatorStepsPageProps) {
  return (
    <div className="min-h-screen bg-[#0a0e27]">
      <header className="sticky top-0 z-10 bg-[#0a0e27] border-b border-[#8b5cf6]/20 px-4 py-4">
        <div className="max-w-[600px] mx-auto flex items-center justify-center">
          <ImageWithFallback
            src={logoBlack}
            alt="Patreon"
            className="h-[40px] w-auto invert"
          />
        </div>
      </header>

      <div className="px-4 py-8 md:py-12">
        <div className="max-w-[600px] mx-auto space-y-8">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-20 h-20 rounded-full bg-[#8b5cf6] flex items-center justify-center text-4xl">
              ✓
            </div>
            <h1 className="text-[28px] font-bold text-white">
              🚀 Welcome to Merch Hub, Creator!
            </h1>
            <p className="text-[16px] text-white/90">Here's how it works</p>
            <p className="text-[14px] text-[#6b7280] italic">
              Upload designs → Set prices → Patrons buy → We print & ship → You earn
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 rounded-xl p-6 space-y-3">
              <div className="flex items-start gap-4">
                <span className="text-2xl font-bold text-[#8b5cf6]">1️⃣</span>
                <div className="space-y-1">
                  <h3 className="text-[18px] font-semibold text-white">Set up your shop</h3>
                  <p className="text-[14px] text-white/80">Upload your designs and customize your storefront</p>
                </div>
              </div>
            </div>

            <div className="bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 rounded-xl p-6 space-y-3">
              <div className="flex items-start gap-4">
                <span className="text-2xl font-bold text-[#8b5cf6]">2️⃣</span>
                <div className="space-y-1">
                  <h3 className="text-[18px] font-semibold text-white">Choose what to sell</h3>
                  <p className="text-[14px] text-white/80">Apparel, stickers, posters, accessories, and more</p>
                </div>
              </div>
            </div>

            <div className="bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 rounded-xl p-6 space-y-3">
              <div className="flex items-start gap-4">
                <span className="text-2xl font-bold text-[#8b5cf6]">3️⃣</span>
                <div className="space-y-1">
                  <h3 className="text-[18px] font-semibold text-white">Promote to your patrons</h3>
                  <p className="text-[14px] text-white/80">Share your merch with your existing community</p>
                </div>
              </div>
            </div>

            <div className="bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 rounded-xl p-6 space-y-3">
              <div className="flex items-start gap-4">
                <span className="text-2xl font-bold text-[#8b5cf6]">4️⃣</span>
                <div className="space-y-1">
                  <h3 className="text-[18px] font-semibold text-white">We handle production & shipping</h3>
                  <p className="text-[14px] text-white/80">No inventory, no logistics—we take care of everything</p>
                </div>
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
