export default function TaskRow({title, index}) {
  return (
    <div className="flex justify-between border-2 p-[20px] rounded-[5px]">
      <div className="flex gap-[20px]">
        <span>icon</span>
        <span>
          <strong>Task:</strong> {title}
        </span>
      </div>
      <div className="flex gap-[20px]">
        <span>edit</span>
        <span>delete</span>
      </div>
    </div>
  );
}
