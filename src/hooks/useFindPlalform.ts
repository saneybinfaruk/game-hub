import usePlatforms from "./usePlatfroms";

const useFindPlatform = (platformId?: number) =>
  usePlatforms().data?.results.find((platform) => platform.id == platformId);

export default useFindPlatform;
