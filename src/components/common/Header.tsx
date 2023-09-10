import IconButton from "./IconButton";
import Container from "./Container";
import Icon from "./Icon";

function Header() {
  return (
    <>
      <Container>
        <nav
          className="flex items-center justify-between px-3 py-0 mt-5 border"
          id="header"
        >
          <a href="/" className="border-0 hover:border-0">
            <h1 className="text-xl font-semibold md:text-2xl">Andrew Nasef</h1>
          </a>
          <div className="flex gap-3 md:hidden">
            <a href="/projects">
              <Icon className="w-5 md:w-8" src="/assets/projects-icon.svg" />
            </a>
            <a href="/contact">
              <Icon className="w-5 md:w-8" src="/assets/contact-icon.svg" />
            </a>
          </div>
          <div className="hidden gap-3 md:flex">
            <a href="/">Home</a>
            <a href="/projects">Projects</a>
            <a href="/contact">Contact</a>
          </div>
        </nav>
      </Container>
    </>
  );
}
export default Header;
