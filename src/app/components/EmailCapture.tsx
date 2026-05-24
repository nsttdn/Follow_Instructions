import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Checkbox } from './ui/checkbox';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowLeft } from 'lucide-react';
import logoBlack from '../../imports/logo_black.png';

interface EmailCaptureProps {
  title: string;
  subtitle: string;
  onContinue: (email: string, notifications: boolean) => void;
  onBack: () => void;
}

export function EmailCapture({ title, subtitle, onContinue, onBack }: EmailCaptureProps) {
  const [email, setEmail] = useState('');
  const [notifications, setNotifications] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      onContinue(email, notifications);
    }
  };

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
        <div className="max-w-[600px] mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2 text-center">
              <h1 className="text-[28px] font-bold text-white">{title}</h1>
              <p className="text-[16px] text-[#6b7280]">{subtitle}</p>
            </div>

            <div className="space-y-4">
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full h-[44px] bg-[#0a0e27] border-[#8b5cf6]/20 text-white placeholder:text-[#6b7280] focus:border-[#8b5cf6]"
              />

              <div className="flex items-center gap-3">
                <Checkbox
                  id="notifications"
                  checked={notifications}
                  onCheckedChange={(checked) => setNotifications(checked as boolean)}
                  className="border-[#8b5cf6]/40 data-[state=checked]:bg-[#8b5cf6] data-[state=checked]:border-[#8b5cf6]"
                />
                <label
                  htmlFor="notifications"
                  className="text-[14px] text-white cursor-pointer"
                >
                  ✓ Send me updates about Patreon Hub
                </label>
              </div>
            </div>

            <Button
              type="submit"
              disabled={!email}
              className="w-full h-[56px] md:h-[48px] bg-[#8b5cf6] hover:bg-[#7c3aed] disabled:bg-[#4b5563] disabled:text-[#6b7280] text-white text-[16px] font-semibold rounded-xl transition-all duration-200"
            >
              Continue
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
