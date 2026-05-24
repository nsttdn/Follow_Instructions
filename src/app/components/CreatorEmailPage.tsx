import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Checkbox } from './ui/checkbox';
import { ImageWithFallback } from './figma/ImageWithFallback';
import logoBlack from '../../imports/logo_black.png';

interface CreatorEmailPageProps {
  onSubmit: (email: string, sendResources: boolean) => void;
}

export function CreatorEmailPage({ onSubmit }: CreatorEmailPageProps) {
  const [email, setEmail] = useState('');
  const [sendResources, setSendResources] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      onSubmit(email, sendResources);
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#0a0e27] flex items-center justify-center px-4">
        <div className="max-w-[600px] mx-auto text-center space-y-6">
          <div className="w-20 h-20 rounded-full bg-[#8b5cf6] flex items-center justify-center text-4xl mx-auto">
            ✓
          </div>
          <h1 className="text-[28px] font-bold text-white">All set!</h1>
          <p className="text-[16px] text-white/80">Check your email for setup instructions</p>
        </div>
      </div>
    );
  }

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
        <div className="max-w-[600px] mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2 text-center">
              <h1 className="text-[28px] font-bold text-white">Ready to launch?</h1>
              <p className="text-[16px] text-[#6b7280]">Share your email for setup guide</p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-[14px] text-white">
                  Email <span className="text-[#8b5cf6]">*</span>
                </label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full h-[44px] bg-[#0a0e27] border-[#8b5cf6]/20 text-white placeholder:text-[#6b7280] focus:border-[#8b5cf6]"
                />
              </div>

              <div className="flex items-center gap-3">
                <Checkbox
                  id="resources"
                  checked={sendResources}
                  onCheckedChange={(checked) => setSendResources(checked as boolean)}
                  className="border-[#8b5cf6]/40 data-[state=checked]:bg-[#8b5cf6] data-[state=checked]:border-[#8b5cf6]"
                />
                <label
                  htmlFor="resources"
                  className="text-[14px] text-white cursor-pointer"
                >
                  ✓ Send me resources and setup guides
                </label>
              </div>
            </div>

            <Button
              type="submit"
              disabled={!email}
              className="w-full h-[56px] md:h-[48px] bg-[#8b5cf6] hover:bg-[#7c3aed] disabled:bg-[#4b5563] disabled:text-[#6b7280] text-white text-[16px] font-semibold rounded-xl transition-all duration-200"
            >
              Go to Creator Dashboard
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
