import { atom, selector, useRecoilState, useRecoilValue } from "recoil";

export const projectsDataState = atom({
  key: "projectsDataState",
  default: [],
});

export const searchResultsState = atom({
    key: "searchResultsState",
    default: "",
});

export const hideSearchState = atom({
    key: "hideSearchState",
    default: false,
});

export const hideInstituteState = atom({
    key: "hideInstituteState",
    default: true,
});

export const hideSubjectState = atom({
    key: "hideSubjectState",
    default: true,
});

export const hideYearState = atom({
    key: "hideYearState",
    default: true,
});

export const hideSortState = atom({
    key: "hideSortState",
    default: true,
});

export const instituteSelectedState = atom({
    key: "instituteSelectedState",
    default: ""
})

export const subjectSelectedState = atom({
    key: "subjectSelectedState",
    default: ""
})

export const yearSelectedState = atom({
    key: "yearSelectedState",
    default: ""
})

export const sortTypeState = atom({
    key: "sortTypeState",
    default: "latest"
})

export const reqBodyState = atom({
    key: "reqBodyState",
    get: ({get}) => {
        const institute = get(instituteSelectedState);
        const subject = get(subjectSelectedState);
        const year = get(yearSelectedState);
        const sortType = get(sortTypeState);
        const reqBody = {
            institute: institute,
            subject: subject,
            year: year,
            sortType: sortType,
        }
        return reqBody;
    },
})