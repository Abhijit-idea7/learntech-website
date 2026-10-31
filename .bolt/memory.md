# Project memory

## Product intent & audience

- LearnTech website: appears to be a B2B/edtech marketing site with case studies, platforms, and consulting/solutions content.
- Source of truth for content/files: GitHub branch `Abhijit-idea7/learntech-website` at commit `a195079599c6d652c520c6529ab1793b55ad0c96`.

## Brand personality & voice

- Inferred: professional, technology-focused, trust-building for enterprise/education clients.

## Visual design & UX direction

- Tailwind CSS + shadcn/ui + lucide-react iconography (per `.bolt/prompt`; not restated).
- Existing custom work in this project includes mobile logo scroll styles in `src/index.css` and a new "Our Work" hero image in `src/pages/Work.tsx`.
- Site has multi-page architecture: Home, Platforms, PlatformDetail, Work, CaseStudyDetail, Content, NotFound.
- Previously had Consulting and Solutions pages; user may attempt to remove these via batch file operations.

## Decisions, constraints & rationale

- User attempted a batch `node -e` script to overwrite 19 files and delete 6 files (consulting + solutions).
- Assistant declined to run without confirmation due to risk of destroying local-only changes (mobile logo scroll CSS, Our Work hero image).
- Prefer safe file operations: back up before bulk overwrite, or selective pull, rather than blind destructive commands.

## Open questions & assumptions

- Whether user wants to preserve local modifications (`index.css` mobile logo styles, `Work.tsx` hero image) before any bulk file sync.
- Whether consulting/solutions pages should be fully removed or restored later.
- Exact source/repo relationship: GitHub commit is treated as canonical, but local changes may diverge.