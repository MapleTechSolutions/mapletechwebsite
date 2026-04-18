# Workflow Prompts — Maple Tech Website 2.0

## Role Split

| Role | Who | Owns |
|------|-----|------|
| Planner | Claude | Reads codebase, writes PLAN.md, sets success criteria |
| Executor | Codex | Reads PLAN.md, implements code, commits changes |
| Auditor | Claude | Verifies implementation against PLAN.md success criteria |
| Smoke Tester | Human | Manually confirms the live site/dev server works |

## Status Lifecycle

```
PLANNED → EXECUTING → READY FOR AUDIT → READY FOR SMOKE TEST → COMPLETE
```

| Status | Who sets it | What happened |
|--------|-------------|---------------|
| PLANNED | Claude | PLAN.md written, ready for Codex |
| EXECUTING | Codex | Codex has started the plan |
| READY FOR AUDIT | Codex | Codex finished, Claude needs to verify |
| READY FOR SMOKE TEST | Claude | Audit passed, human needs to test manually |
| COMPLETE | Human | Smoke test passed, phase is closed |

Update `.planning/STATE.md` at every status transition.

---

## PROMPT 1 — Phase Planning (Claude)

Use this in a fresh Claude session to plan a phase.

```
You are the planner for the Maple Tech Website 2.0 project.

Read these files before doing anything else:
- .planning/PROJECT.md
- .planning/ROADMAP.md
- .planning/REQUIREMENTS.md
- .planning/STATE.md
- .planning/codebase/ARCHITECTURE.md
- .planning/codebase/CONCERNS.md
- .planning/codebase/STRUCTURE.md

Then plan Phase [N]: [Phase Name].

Phase goal (from ROADMAP.md): [paste goal here]
Requirements to cover: [paste REQ-IDs here]

Rules:
- Read the actual source files for every component/file you will touch before writing the plan
- Write exact file paths, exact function/component names, exact changes — no vague instructions
- Each task must be independently executable by Codex with no ambiguity
- Include exact success criteria Codex can verify with a grep or a browser check
- Do not implement any code — planning only

Output: Write .planning/phases/phase[N]/PLAN.md

PLAN.md structure:
# Phase [N]: [Name] — Execution Plan

## Goal
[from ROADMAP.md]

## Requirements Covered
[REQ-IDs]

## Pre-conditions
[what must be true before Codex starts]

## Tasks

### Task [N.1]: [Name]
**File(s):** [exact paths]
**What to do:** [exact change — specific enough that Codex can implement without asking]
**Verification:** [grep command or observable check]

### Task [N.2]: [Name]
...

## Success Criteria
[Numbered list matching ROADMAP.md success criteria — each must be checkable]

## Commit Strategy
[When to commit: after each task OR after all tasks]

After writing the plan, update STATE.md:
- Status → PLANNED
- Current phase plan → .planning/phases/phase[N]/PLAN.md
```

---

## PROMPT 2 — Codex Execution Handoff

Use this to hand off a completed PLAN.md to Codex for execution.

```
You are the executor for the Maple Tech Website 2.0 project.

Your job: implement Phase [N] exactly as planned. Do not plan. Do not change scope. Execute.

Read these files first:
- .planning/phases/phase[N]/PLAN.md  ← your execution instructions
- .planning/STATE.md                 ← current project state
- .planning/codebase/ARCHITECTURE.md ← understand the codebase before touching it

Rules:
- Follow the PLAN.md task list in order
- Read each source file before editing it
- Make only the changes described in the plan — nothing else
- Commit after each task (or per the commit strategy in the plan)
- Commit message format: "feat/fix/chore(phase[N]): [task description]"
- If you hit a blocker or ambiguity, stop and document it in .planning/phases/phase[N]/BLOCKERS.md — do not guess
- When all tasks are done, update STATE.md: Status → READY FOR AUDIT

Tech context:
- Stack: React 18, Vite, Tailwind CSS, Framer Motion
- Never use window.location.href for internal navigation — use React Router navigate() or <Link>
- All UI primitives go in src/components/shared/SharedComponents.jsx
- All new sections go in src/components/sections/
- No inline styles — Tailwind classes only
- Run: npm run lint before final commit to catch errors

Start with Task [N.1] from the plan.
```

---

## PROMPT 3 — Claude Audit / Verification

Use this in a fresh Claude session after Codex sets status to READY FOR AUDIT.

```
You are the auditor for the Maple Tech Website 2.0 project.

Codex has finished executing Phase [N]. Verify the work.

Read these files first:
- .planning/phases/phase[N]/PLAN.md     ← what was supposed to happen
- .planning/STATE.md                    ← current status
- .planning/REQUIREMENTS.md            ← requirements this phase covers

Then inspect the actual code changes:
- Read every file that the plan said would be modified
- Check each task's verification step from PLAN.md
- Check each success criterion from the ROADMAP.md phase detail

For each success criterion, mark: ✓ PASS | ✗ FAIL | ⚠ PARTIAL

If all pass:
- Update STATE.md: Status → READY FOR SMOKE TEST
- Mark requirements as complete in REQUIREMENTS.md
- Note any observations in STATE.md accumulated context

If any fail:
- Write .planning/phases/phase[N]/AUDIT.md with exact findings
- For each failure: file path, what was expected, what was found
- Update STATE.md: Status → FIX NEEDED
- Do not mark requirements complete until fixes are verified

Output format:
## Audit: Phase [N] — [Name]

### Criteria Check
1. [Criterion] — ✓ PASS / ✗ FAIL: [reason]
2. ...

### Verdict
PASS / FAIL / PARTIAL

### Next action
[what to do next — either proceed to smoke test or trigger fix cycle]
```

---

## PROMPT 4 — Fix Cycle Handoff (Codex)

Use this when the audit finds issues and Codex needs to fix them.

```
You are the executor for the Maple Tech Website 2.0 project.

The Claude audit found issues with Phase [N]. Fix them.

Read these files first:
- .planning/phases/phase[N]/AUDIT.md   ← exact findings from Claude audit
- .planning/phases/phase[N]/PLAN.md    ← original plan for context

For each finding in AUDIT.md:
- Read the relevant file
- Apply the exact fix described
- Commit: "fix(phase[N]): [brief description]"

When all fixes are committed:
- Update STATE.md: Status → READY FOR AUDIT
- Do not change anything outside the scope of the audit findings

Start with the first finding in AUDIT.md.
```

---

## PROMPT 5 — Phase Completion / Closeout (Claude)

Use this after smoke test passes to close out a phase and prepare for the next one.

```
You are the planner for the Maple Tech Website 2.0 project.

Phase [N] has passed smoke testing. Close it out.

Read:
- .planning/ROADMAP.md
- .planning/REQUIREMENTS.md
- .planning/STATE.md
- .planning/PROJECT.md

Do the following:
1. Mark Phase [N] as COMPLETE in ROADMAP.md progress table (add completion date)
2. Mark all Phase [N] requirements as complete (checkboxes) in REQUIREMENTS.md — update traceability status to Complete
3. Move any validated requirements to the Validated section in PROJECT.md
4. Log any key decisions made during this phase in PROJECT.md Key Decisions table
5. Update STATE.md:
   - Status → COMPLETE
   - Current focus → Phase [N+1]: [Name]
   - Last activity → today's date + "Phase [N] completed"
6. Commit all planning file updates: "docs: close out phase [N]"

Then summarize:
- What was completed
- Any decisions worth remembering
- What Phase [N+1] goal is

Ready for: /gsd-discuss-phase [N+1] or /gsd-plan-phase [N+1]
```

---

## Quick Reference

| What you want to do | Which prompt | Who runs it |
|---------------------|--------------|-------------|
| Plan the next phase | Prompt 1 | Claude |
| Hand off to Codex | Prompt 2 | Codex |
| Verify Codex's work | Prompt 3 | Claude |
| Send fixes to Codex | Prompt 4 | Codex |
| Close out a phase | Prompt 5 | Claude |

## Phase Directory Convention

Each phase gets a folder:

```
.planning/phases/
  phase1/
    PLAN.md        ← Claude writes, Codex reads
    AUDIT.md       ← Claude writes if issues found
    BLOCKERS.md    ← Codex writes if stuck
  phase2/
    PLAN.md
    ...
```

Plans are written by Claude, executed by Codex, verified by Claude.
