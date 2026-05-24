import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Checkbox } from './ui/checkbox';
import { ImageWithFallback } from './figma/ImageWithFallback';
import logoBlack from '../../imports/logo_black.png';

interface PatronThankYouProps {
  selectedCategories: string[];
  onFinish: (email?: string, notifications?: boolean) => void;
}

export function PatronThankYou({ selectedCategories, onFinish }: PatronThankYouProps) {
  const [email, setEmail] = useState('');
  const [notifications, setNotifications] = useState(true);

  const handleFinish = () => {
    if (email) {
      onFinish(email, notifications);
    } else {
      onFinish();
    }
  };

  const categoryLabels: Record<string, string> = {
    gaming: 'Gaming',
    art: 'Art',
    podcasts: 'Podcasts',
    writing: 'Writing',
    music: 'Music',
    education: 'Education'
  };

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
              🎉 You're all set, Patron!
            </h1>
            <p className="text-[16px] text-white/90">
              Start exploring exclusive merch from your creators
            </p>
          </div>

          {selectedCategories.length > 0 && (
            <div className="bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 rounded-xl p-6 space-y-3">
              <h3 className="text-[16px] font-semibold text-white">Your interests:</h3>
              <div className="flex flex-wrap gap-2">
                {selectedCategories.map((category) => (
                  <span
                    key={category}
                    className="px-3 py-1 bg-[#8b5cf6] rounded-full text-[14px] text-white"
                  >
                    {categoryLabels[category] || category}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="flex gap-4">
            <Button
              onClick={handleFinish}
              className="flex-1 h-[56px] md:h-[48px] bg-[#8b5cf6] hover:bg-[#7c3aed] text-white text-[16px] font-semibold rounded-xl transition-all duration-200"
            >
              Browse Merch
            </Button>
            <Button
              onClick={handleFinish}
              variant="outline"
              className="flex-1 h-[56px] md:h-[48px] border border-white bg-transparent hover:bg-white/10 text-white text-[16px] font-semibold rounded-xl transition-all duration-200"
            >
              Explore Collections
            </Button>
          </div>

          <div className="border-t border-[#8b5cf6]/20 pt-6 space-y-4">
            <p className="text-[14px] text-[#6b7280] text-center">
              Want updates on new drops? <span className="text-white">Optional:</span>
            </p>

            <div className="space-y-4">
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-[44px] bg-[#0a0e27] border-[#8b5cf6]/20 text-white placeholder:text-[#6b7280] focus:border-[#8b5cf6]"
              />

              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <Checkbox
                    id="patron-notifications"
                    checked={notifications}
                    onCheckedChange={(checked) => setNotifications(checked as boolean)}
                    className="border-[#8b5cf6]/40 data-[state=checked]:bg-[#8b5cf6] data-[state=checked]:border-[#8b5cf6]"
                  />
                  <label
                    htmlFor="patron-notifications"
                    className="text-[14px] text-white cursor-pointer"
                  >
                    ✓ Send me notifications about new drops
                  </label>
                </div>
                <p className="text-[12px] text-[#6b7280] ml-8">
                  (you can always unsubscribe later)
                </p>
              </div>
            </div>

            <Button
              onClick={handleFinish}
              className="w-full h-[56px] md:h-[48px] bg-[#8b5cf6] hover:bg-[#7c3aed] text-white text-[16px] font-semibold rounded-xl transition-all duration-200"
            >
              Finish
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
