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
  // colorsList: ColorDetails[];
  colorsData: ColorsData;
  error?: string;
}


interface ColorsListState {
  loading: boolean;
  // colorsList: ColorDetails[];
  colorsList: ColorsData['data'];
  error?: string;
}
interface ColorDetailsState {
  loading: boolean;
  colorDetails: ColorDetails;
  error?: string;
}




type MockDeviceIdType = 11 | 22 | 33 | 44 | 55 | 66 | 77;
interface MockDeviceIdInterface {
  deviceId: MockDeviceIdType;
}
interface ILightOption {
  key: string;
  name: string;
  tempInKelvin: number;
  color: string
}