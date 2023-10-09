import { NextApiRequest, NextApiResponse } from 'next';


export async function getHandler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const headers = {
      Authorization: "Bearer YOUR_ACCESS_TOKEN",
      "Content-Type": "application/json",
      "x-idempotence-key": "dad2sa",
      "platform-type": "sddd",
      "app-version": "1",
      "os-version": "2",
      "device-model": "apple",
      "device-id": "guest",
      "user-name": "guest",
    };
  
    const username = process.env.USERNAME;

    const apiUrl = `https://qagateway.eshop2drop.com/api/product/sales?dayLength=100&pageSize=100&username=${username}`;

    const apiResponse = await fetch(apiUrl, {
      method: "GET",
      headers: headers,
    });

    if (!apiResponse.ok) {
      throw new Error("Failed to fetch data");
    }

    const productlist = await apiResponse.json();

    res.status(200).json(productlist.data.products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
}
