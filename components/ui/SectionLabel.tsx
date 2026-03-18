interface SectionLabelProps {
  text: string;
  light?: boolean;
}

function Barcode({ light }: { light?: boolean }) {
  const color = light ? "bg-[#C4D99D]" : "bg-[#333]";
  return (
    <span className="relative inline-block h-[13px] w-[22px] max-md:h-[10px]">
      <span className={`absolute inset-y-0 left-0 w-[2px] ${color}`} />
      <span className={`absolute inset-y-0 left-[3px] w-[2px] ${color}`} />
      <span className={`absolute inset-y-0 left-[7px] w-[3px] ${color}`} />
      <span className={`absolute inset-y-0 left-[13px] w-[2px] ${color}`} />
      <span className={`absolute inset-y-0 left-[17px] w-[1px] ${color}`} />
      <span className={`absolute inset-y-0 right-0 w-[2px] ${color}`} />
    </span>
  );
}

export default function SectionLabel({ text, light }: SectionLabelProps) {
  const textColor = light ? "text-[#C4D99D]" : "text-[#333]";

  return (
    <div className="flex items-center gap-[6px]">
      <Barcode light={light} />
      <span className={`font-[family-name:var(--font-roboto)] text-[18px] font-semibold uppercase leading-none tracking-normal max-lg:text-sm ${textColor}`}>
        {text}
      </span>
    </div>
  );
}
