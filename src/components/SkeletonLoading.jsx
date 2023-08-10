export default function SkeletonLoading({ count }) {
  return (
    <ul>
      {Array.from({ length: count }).map((_, index) => (
        <li key={index} className='dust-card skeleton-loader'></li>
      ))}
    </ul>
  );
}
