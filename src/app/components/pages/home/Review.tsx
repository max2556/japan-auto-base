import Image from 'next/image';

export default function Review() {
  return (
    <div className="space-y-2 bg-white rounded-10 py-3 px-4">
      {/* Review Author */}
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 shrink-0 bg-brand-gray rounded-full overflow-hidden">
          {/* <Image
            src=""
            alt="Avatar"
            width={200}
            height={200}
            className="w-full h-full object-cover"
          /> */}
        </div>
        <h4>Егор</h4>
      </div>
      <p className="md:max-w-[12.5rem] text-sm">
        Благодря JapanAutoBase у меня полуичлось купиь новую машину по разумным
        деньгам
      </p>
    </div>
  );
}
