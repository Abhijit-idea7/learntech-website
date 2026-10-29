/*
# Round 4 HSP em dash cleanup

1. Modified data
- Update the High Stakes Presentation problem statement to replace the em dash
  before the examples with a colon.

2. Security
- No tables, columns, permissions, or RLS policies are changed.
*/

UPDATE programs
SET problem_statement = '"We have to think about it." The four words that follow most high-stakes presentations. They rarely mean what we hope. This program is for the presentations that actually matter: budget pitches, town halls, cross-functional alignment.'
WHERE slug = 'high-stakes-presentation';
