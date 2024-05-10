type Props = {
  id?: string;
  children: React.ReactNode;
  isWidthFull?: boolean;
};

export default function BaseSection({ children, id = '', isWidthFull = false }: Props) {
  return (
    <section id={id} className="flex min-h-screen justify-center px-[16px] md:px-[40px] lg:px-0">
      {isWidthFull ? (
        <div className="w-full">{children}</div>
      ) : (
        <div className="w-full lg:w-[1028px]">{children}</div>
      )}
    </section>
  );
}
