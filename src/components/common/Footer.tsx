import SocialLinks from "./SocialLinks";

function Footer() {
  return (
    <footer className="flex items-center justify-between w-screen px-5 py-3 text-white bg-[var(--primary)]">
      <p className="text-sm">© All rights reserved</p>
      <div>
        <SocialLinks />
      </div>
    </footer>
  );
}
export default Footer;
