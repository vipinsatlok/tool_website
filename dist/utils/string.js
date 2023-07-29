"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.titleToSlug = void 0;
const titleToSlug = (title) => {
    // Step 1: Remove special characters, punctuation, and spaces
    const slug = title.replace(/[^\w\s]|_/g, "").replace(/\s+/g, "");
    // Step 2: Convert to lowercase
    const lowercaseSlug = slug.toLowerCase();
    // Step 3: Replace spaces with hyphens
    const finalSlug = lowercaseSlug.replace(/\s+/g, "-");
    return finalSlug;
};
exports.titleToSlug = titleToSlug;
