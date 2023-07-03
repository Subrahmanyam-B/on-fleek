const URL = process.env.NEXT_PUBLIC_BASE_URL;

export function getAssetsURl(id) {
  return `${URL}/assets/${id}`;
}

export function getFetcchURL(slug) {
  return `${URL}${slug}`;
}
