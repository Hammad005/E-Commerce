const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="relative">
        <div className="w-20 h-20 border-emerald-200 border-4 rounded-full">
          <div className="w-20 h-20 border-emerald-700 border-t-4 animate-spin rounded-full absolute left-0 top-0" />
          <div className="sr-only">Loading</div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
