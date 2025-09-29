import { createStore, produce } from "solid-js/store";

import data from "../data.json";
import type { JobPost } from "../types/JobPost";

export interface JobListingState {
    filters: {
        languages: string[];
        tools: string[];
        roles: string[];
        levels: string[];
    };
    posts: JobPost[];
}

const [store, setStore] = createStore<JobListingState>({
    filters: {
        languages: [],
        tools: [],
        roles: [],
        levels: [],
    },
    posts: data as JobPost[],
});

export const posts = {
    getPosts: () => {
        return store.posts.filter((post) => {
            const filter = filters.getFilters();

            const hasRole = filter.roles.length === 0 || filter.roles.includes(post.role);
            const hasLevel = filter.levels.length === 0 || filter.levels.includes(post.level);
            const hasTools = filter.tools.length === 0 || filter.tools.every((tool) => post.tools.includes(tool));
            const hasLanguages =
                filter.languages.length === 0 ||
                filter.languages.every((language) => post.languages.includes(language));

            return hasLanguages && hasTools && hasRole && hasLevel;
        });
    },
};

export const filters = {
    getFilters: () => store.filters,
    addFilter: (type: keyof JobListingState["filters"], value: string) => {
        setStore(
            "filters",
            produce((currentFilter) => {
                if (currentFilter[type].includes(value)) return;
                currentFilter[type].push(value);
            }),
        );
    },
    removeFilter: (type: keyof JobListingState["filters"], value: string) => {
        setStore(
            "filters",
            produce((currentFilter) => {
                currentFilter[type] = currentFilter[type].filter((v) => v !== value);
            }),
        );
    },
    clearAll: () => {
        setStore(
            "filters",
            produce((currentFilter) => {
                currentFilter.languages = [];
                currentFilter.tools = [];
                currentFilter.roles = [];
                currentFilter.levels = [];
            }),
        );
    },
    isEmpty: () => {
        const a = store.filters.roles.length === 0;
        const b = store.filters.levels.length === 0;
        const c = store.filters.tools.length === 0;
        const d = store.filters.languages.length === 0;

        return a && b && c && d;
    },
};
