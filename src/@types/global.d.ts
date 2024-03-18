interface ColorsData {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: ColorDetails[];
}

interface ColorsDataState {
  loading: boolean;
  colorsData: ColorsData;
  error?: string;
}

interface ColorDetailsData {
    data: ColorDetails;
}

interface ColorDetails {
    id: number;
    name: string;
    year: number;
    color: string;
    pantone_value: string;
}

interface ColorDetailsState {
  loading: boolean;
  data: ColorDetailsData;
  error?: string;
}


interface FetchParams {
  page?: number;
  perPage?: number;
  id?: string;
} 