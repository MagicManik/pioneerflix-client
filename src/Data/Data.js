import { BiVideoPlus, BiStreetView } from 'react-icons/bi';
import { MdLiveTv, MdCastForEducation } from 'react-icons/md';

export const dbCardData = [
    {
        id: 1,
        title: "Videos",
        count: "7984+",
        modal: 1,
        icon: BiVideoPlus,
        hover: '#4d0885',
        update: 'Updated 2h ago',
        backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
        boxShadow: "0px 5px 10px 0px #e0c6f5",
        barValue: 70,
        value: "25,970",
        series: [
            {
                name: "Sales",
                data: [31, 40, 28, 51, 42, 109, 100],
            },
        ],
    },
    {
        id: 2,
        title: "Viewer",
        count: "4M+",
        modal: 2,
        icon: BiStreetView,
        hover: '#f76f7f',
        update: 'Updated 1h ago',
        backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
        boxShadow: "0px 5px 10px 0px #FDC0C7",
        barValue: 80,
        value: "14,270",
        series: [
            {
                name: "Revenue",
                data: [10, 100, 50, 70, 80, 30, 40],
            },
        ],
    },
    {
        id: 3,
        title: "Live",
        count: "150",
        modal: 3,
        icon: MdLiveTv,
        hover: '#faaf37',
        update: 'Update Live',
        backGround: "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
        boxShadow: "0px 5px 10px 0px #F9D59B",
        barValue: 85,
        value: "4,270",
        series: [
            {
                name: "Expenses",
                data: [10, 25, 15, 30, 12, 15, 20],
            },
        ],
    },
    {
        id: 4,
        title: "Education",
        count: "640+",
        modal: 4,
        icon: MdCastForEducation,
        hover: '#1caded',
        update: 'Updated 3h ago',
        backGround: "linear-gradient(rgb(18, 95, 130) -146.42%, rgb(38, 166, 224) -46.42%)",
        boxShadow: "0px 5px 10px 0px #7bcaed",
        barValue: 90,
        value: "4,270",
        series: [
            {
                name: "Expenses",
                data: [10, 25, 15, 30, 12, 15, 20],
            },
        ],
    },
]