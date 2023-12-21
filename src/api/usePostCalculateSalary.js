import axios from "axios";
import {useMutation, useQuery} from "@tanstack/react-query";

export const usePostCalculateSalary = async ({bruttoYearly}) => {
    const postGehaltMutation = useMutation({mutationFn: async () => {
            console.log("going");
            const gehalt = await axios.post('https://calculations.sparkasse.de/salary', {
                "childAllowance": 0,
                "churchTax": false,
                "employerCapitalFormingBenefit": null,
                "occupationalPension": null,
                "province": "BE",
                "taxClass": 1,
                "monthlySalary": 3000,
                "healthInsuranceContributionRate": 14.6,
                "monthlyPrivateInsurance": null

        })
            return gehalt
    },
    onSuccess:(data) => {
        console.log("some data");
        console.log(data);
    }})

return postGehaltMutation
}
