import useStoreMenu from "../../stores/menu.store";

const BurgerButton = ({ className }: { className?: string }) => {
  const { menuIsOpen, setMenuIsOpen } = useStoreMenu();

  return (
    <button
      onClick={() => setMenuIsOpen(!menuIsOpen)}
      className={`group relative h-10 w-10 ${className}`}
    >
      <span
        className={`bg-primary-500 absolute left-1/2 top-1/2 h-[3px] w-8 -translate-x-1/2 -translate-y-1/2 transform rounded-full transition-all duration-300 ${menuIsOpen ? "rotate-45" : "top-3 rotate-0"} `}
      ></span>
      <span
        className={`bg-primary-500 absolute left-1/2 top-1/2 h-[3px] -translate-x-1/2 -translate-y-1/2 transform rounded-full transition-all duration-200 ${menuIsOpen ? "w-0" : "w-8"}`}
      ></span>
      <span
        className={`bg-primary-500 absolute left-1/2 top-1/2 h-[3px] w-8 -translate-x-1/2 -translate-y-1/2 transform rounded-full transition-all duration-150 ${menuIsOpen ? "-rotate-45" : "top-7 rotate-0"}`}
      ></span>
    </button>
  );
};

export default BurgerButton;
