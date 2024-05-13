import Icon24x24Github from './@icons/24x24/Icon24x24Github';
import Icon24x24Heart from './@icons/24x24/Icon24x24Heart';

export default function AppFooter() {
  return (
    <footer className="flex justify-center  bg-light-950 px-4 py-2 md:px-10 md:py-4">
      <div className="flex h-[60px] w-full items-center justify-center gap-3 text-[20px] text-light-50 lg:w-[1028px]">
        <a
          href="https://github.com/alxmcr/fe-muvifav-app-react-ts"
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          <Icon24x24Github />
        </a>
        <span>|</span>
        <span className="flex items-center gap-2">
          {`Made with `}
          <span className="text-golden-300">
            <Icon24x24Heart />
          </span>
          {` in Latam`}
        </span>
      </div>
    </footer>
  );
}
