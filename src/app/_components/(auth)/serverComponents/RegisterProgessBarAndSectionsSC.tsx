import "server-only";

interface RegisterProgessBarAndSectionsSCProps {
  width: string;
}

export function RegisterProgessBarAndSectionsSC({
  width,
}: RegisterProgessBarAndSectionsSCProps) {
  return (
    <div className="w-full mt-4 mb-4">
      <div className="relative h-1 w-full bg-gray-300">
        <div className="h-1 bg-purple-AC25FF" style={{ width }}></div>
      </div>
    </div>
  );
}
