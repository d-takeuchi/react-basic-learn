import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
  VFC,
} from "react";

//回答データの型定義
type InputData = {
  sex: string;
  birthday: {
    year: string;
    month: string;
    day: string;
  };
  questions: {
    [key: number]: string;
  };
  consultationText: string;
};

type InputDataContextType = {
  inputData: InputData;
  setInputData: Dispatch<SetStateAction<InputData>>;
};

//回答データの初期値
const defaultInputData: InputData = {
  sex: "",
  birthday: {
    year: "",
    month: "",
    day: "",
  },
  questions: {
    1: "",
    2: "",
    3: "",
  },
  consultationText: "",
};

export const InputDataContext = createContext({} as InputDataContextType);

export const InputDataProvider: VFC<{ children: ReactNode }> = ({
  children,
}) => {
  const [inputData, setInputData] = useState<InputData>(defaultInputData);

  return (
    <InputDataContext.Provider value={{ inputData, setInputData }}>
      {children}
    </InputDataContext.Provider>
  );
};
