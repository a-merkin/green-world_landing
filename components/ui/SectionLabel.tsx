interface SectionLabelProps {
  text: string;
}

function Barcode() {
  return (
    <span className="relative inline-block h-[13px] w-[22px]">
      <span className="absolute inset-y-0 left-0 w-[2px] bg-[#333]" />
      <span className="absolute inset-y-0 left-[3px] w-[2px] bg-[#333]" />
      <span className="absolute inset-y-0 left-[7px] w-[3px] bg-[#333]" />
      <span className="absolute inset-y-0 left-[13px] w-[2px] bg-[#333]" />
      <span className="absolute inset-y-0 left-[17px] w-[1px] bg-[#333]" />
      <span className="absolute inset-y-0 right-0 w-[2px] bg-[#333]" />
    </span>
  );
}

export default function SectionLabel({ text }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-[6px]">
      <Barcode />
      <span className="font-[family-name:var(--font-roboto)] text-[18px] font-semibold uppercase leading-none tracking-normal text-[#333]">
        {text}
      </span>
    </div>
  );
}
