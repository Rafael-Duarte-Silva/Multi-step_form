import { Prices } from "../types";

export const prices: Prices = {
    monthly: {
        plan: {
            'arcade': 9,
            'advanced': 12,
            'pro': 15
        },

        onlineService: 1,
        largerStorage: 2,
        customizableProfile: 2
    },

    yearly: {
        plan: {
            'arcade': 90,
            'advanced': 120,
            'pro': 150
        },

        onlineService: 10,
        largerStorage: 20,
        customizableProfile: 20
    }
}