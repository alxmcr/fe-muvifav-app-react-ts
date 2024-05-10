type Props = {
  id?: string;
  children: React.ReactNode;
};

export default function BaseSection({ id = '', children }: Props) {
  return (
    <section id={id} className="flex min-h-screen justify-center px-[16px] md:px-[40px] lg:px-0">
      <div className="w-full lg:w-[1028px]">{children}</div>
    </section>
  );
}
