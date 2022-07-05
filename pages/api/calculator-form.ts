import type { NextApiRequest, NextApiResponse } from "next";
import interestCalculator from "../../services/InterestCalculator";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const body = req.body;

    const calculatorResults = interestCalculator(body);

    res.status(200).json(calculatorResults);
}
