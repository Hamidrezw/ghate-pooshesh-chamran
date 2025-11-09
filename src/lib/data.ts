import { apiGet } from "./apiGet";

// service list

export const fetchServiceList = async ({
  page,
  category,
  limit,
  search,
}: {
  page?: number;
  category?: string;
  limit?: number;
  search?: string;
}) => {
  return apiGet("service/", {
    params: {
      page,
      category,
      limit,
      search,
    },
  });
};

// category list

export const fetchCategoryList = async ({
  special,
  main,
  limit,
  child,
}: {
  special?: boolean;
  main?: boolean;
  limit?: number;
  child?: boolean;
}) => {
  return apiGet("service/category/", {
    params: {
      special,
      main,
      limit,
      child,
    },
  });
};

// blog list

export const fetchBlogList = async ({
  page,
  limit,
}: {
  page?: number;
  limit?: number;
}) => {
  return apiGet("blog", {
    params: {
      page,
      limit,
    },
  });
};

//service detail

export const fetchServiceDetail = async ({slug} : {slug: string}) => {
  return apiGet(`service/${slug}`)
}

//category detail

export const fetchCategoryDetail = async ({category} : {category: string}) => {
  return apiGet(`service/category/${category}`)
}

// service page

export const fetchServicePage = async () => {
  return apiGet("core/service_page")
}

// setting

export const fetchSetting = async () => {
  return apiGet("core/settings");
};

//contact us form subject list

export const fetchContactUsFormList = async () => {
  return apiGet("core/contact_subjects");
};

// certificate list

export const fetchCertificates = async () => {
  return apiGet("core/certificates");
};

// about us gallery

export const fetchGalleryList = async ({ page }: { page?: number }) => {
  return apiGet("core/company-galleries", {
    params: {
      page,
    },
  });
};

// contact us page 

export const fetchContactUs = async () => {
  return apiGet("core/contact_us");
};

// home banners

export const fetchBanners = async () => {
  return apiGet("core/banners")
}

export const fetchSocialMedia = async ({
  in_header,
  in_footer,
  in_contact,
}: {
  in_header?: boolean;
  in_footer?: boolean;
  in_contact?: boolean;
}) => {
  const params: Record<string, boolean> = {};
  if (in_header) params.in_header = true;
  if (in_footer) params.in_footer = true;
  if (in_contact) params.in_contact = true;

  return apiGet("core/social_media", { params });
};
