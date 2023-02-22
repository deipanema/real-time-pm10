import { useState, useEffect } from "react";

export default function useDust({ sidoName }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [dusts, setDusts] = useState([]);

  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append(
      "Cookie",
      "JSESSIONID=1j4PtZ7LExlTYrAqaJTZyXZAqrml2neqavHLHLn1JmZPvSE8b8JiAzLpSQzFfvFa.openapiwas1_servlet_engine1; WMONID=M_ahvXPIhiD"
    );

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    setLoading(true);
    setError(null);

    fetch(
      `https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?serviceKey=wMsbZliJBe7k0zf8bAGfpRo3d06Nx8DW4mfmLN907kMnrusJCzrAtYv9SY8Va6AJhj9uLTxmOjwq0cx%2BBwV2%2FQ%3D%3D&returnType=json&numOfRows=50&sidoName=${sidoName}&ver=1.0`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        setDusts(data.response.body.items);
      })
      .catch(() => setError("데이터 전송 시 에러가 발생했습니다."))
      .finally(() => setLoading(false));
  }, [sidoName]);

  return [loading, error, dusts];
}
