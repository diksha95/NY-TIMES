type Props = {};

const Navbar = (props: Props) => {
  return (
    <header className="flex flex-col justify-center">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <h1
          data-testid="bannerHeading"
          className="font-bold md:text-6xl text-2xl font-sans text-black-950"
        >
          The New York Times
        </h1>
      </nav>
    </header>
  );
};

export default Navbar;
