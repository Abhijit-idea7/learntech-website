# Project memory

## Product intent & audience

- LearnTech website: B2B/edtech marketing site with case studies, platforms, and consulting/solutions content.
- Source of truth for content/files: GitHub branch `Abhijit-idea7/learntech-website` at commit `a195079599c6d652c520c6529ab1793b55ad0c96`.

## Brand personality & voice

- Professional, technology-focused, trust-building for enterprise/education clients.

## Visual design & UX direction

- Tailwind CSS + shadcn/ui + lucide-react iconography (per `.bolt/prompt`; not restated).
- Site has multi-page architecture: Home, Platforms, PlatformDetail, Work, CaseStudyDetail, Content, NotFound.
- Consulting and Solutions pages have been removed via batch sync.
- Mobile logo scroll styles in `src/index.css` were overwritten by sync — may need manual restoration if user requests.
- "Our Work" hero image in `src/pages/Work.tsx` reverted to upstream version by sync.

## Decisions, constraints & rationale

- User ran batch `node -e` script to sync 19 files from GitHub and delete 6 files (consulting + solutions pages/content).
- Sync completed successfully; build passes.
- Local modifications (mobile logo scroll CSS, Our Work hero image) were overwritten by upstream versions during sync.
- User confirmed running the destructive command despite earlier warnings about local-only changes being lost.

## Open questions & assumptions

- Whether user wants mobile logo scroll styles restored in `src/index.css`.
- Whether consulting/solutions pages should be restored later or are permanently removed.
- Whether the GitHub commit is still canonical or if further local divergence is expected.