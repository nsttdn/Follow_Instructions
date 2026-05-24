import { ImageWithFallback } from './figma/ImageWithFallback';
import logoBlack from '../../imports/logo_black.png';

export function LogoSplash() {
  return (
    <div className="min-h-screen bg-[#0a0e27] flex items-center justify-center">
      <div className="animate-fadeIn">
        <ImageWithFallback
          src={logoBlack}
          alt="Patreon Logo"
          className="h-[120px] w-auto invert"
        />
      </div>
    </div>
  );
}
