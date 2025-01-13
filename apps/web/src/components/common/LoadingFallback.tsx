interface LoadingFallbackProps {
  contentName: string;
}

export default function LoadingFallback({ contentName }: LoadingFallbackProps) {
  return (
    <div className="min-h-[300px] flex items-center justify-center">
      <p>Loading {contentName}...</p>
    </div>
  );
}
