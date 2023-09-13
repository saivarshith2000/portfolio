type SkillBadgePropType = {
  name: string;
};

export default function SkillBadge({ name }: SkillBadgePropType) {
  return (
    <span className="rounded-md bg-red-400 bg-opacity-30 px-1.5 py-1 text-xs font-bold text-red-500">
      {name}
    </span>
  );
}
