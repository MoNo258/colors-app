interface ColorsData {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: ColorDetails[];
}

interface ColorDetails {
    id: number;
    name: string;
    year: number;
    color: string;
    pantone_value: string;
}

interface ColorsDataState {
  loading: boolean;
  colorsData: ColorsData;
  error?: string;
}


interface ColorsListState {
  loading: boolean;
  colorsList: ColorsData['data'];
  error?: string;
}
interface ColorDetailsState {
  loading: boolean;
  colorDetails: ColorDetails;
  error?: string;
}