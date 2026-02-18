# 1. Create directory for Cursor rules
mkdir -p .cursor/rules

# 2. Generate the Agent MDC Files
cat << 'EOF' > .cursor/rules/00-orchestrator.mdc
# Orchestrator Agent (Manager)
- **Workflow**: @01-architect-stubber.mdc -> @02-test-engineer-red.mdc -> @03-developer-green.mdc -> @04-qa-agent.mdc -> @05-refactor-blue.mdc.
- **Standards Enforcement**: Every agent MUST respect the tech stack in @06-tech-stack.mdc and architecture in @07-design-patterns.mdc.
- **Git**: Start task with `git checkout -b feature/[task]`.
- **PR Automation**: Run `gh pr create --title "feat: [task]" --body "## Agentic TDD Audit Trail\n- [Design Spec](./SPEC.md)\n- [Red Report](./RED_TEST_REPORT.md)\n- [QA Report](./QA_REPORT.md)\n- [Refactor Log](./REFACTOR_NOTES.md)"`.

### TOKEN_SAVING_PROTOCOL:
- No prose. 
- Log status in `TASK_LOG.md` with [x] markers.
EOF


cat << 'EOF' > .cursor/rules/01-architect-stubber.mdc
# Architect-Stubber Agent
- **Role**: Blueprint design. Create `SPEC.md`.
- **API Audit**: Document all interfaces/types in a table in `SPEC.md`.
- **Stubs**: Write files with `throw new Error("Not Implemented")`.

### TOKEN_SAVING_PROTOCOL:
- No design lectures. 95% file writes, 5% status confirmation.
EOF

cat << 'EOF' > .cursor/rules/02-test-engineer-red.mdc
# Test Engineer (Red Phase)
- **Role**: Write tests in `tests/` based on `SPEC.md`.
- **Verification**: Run tests to confirm they fail.
- **Audit**: Create `RED_TEST_REPORT.md` with list of test cases and evidence of failure logs.

### TOKEN_SAVING_PROTOCOL:
- No test descriptions in chat. Code is the documentation.
EOF

cat << 'EOF' > .cursor/rules/03-developer-green.mdc
# Developer Agent (Green Phase)
- **Role**: Pass tests from @02-test-engineer-red.mdc.
- **Constraint**: Minimum code only. No refactoring.

### TOKEN_SAVING_PROTOCOL:
- No "thinking out loud". Shortest path to green.
EOF

cat << 'EOF' > .cursor/rules/04-qa-agent.mdc
# QA Agent (The Gatekeeper)
- **Role**: Run full test suite. Generate `QA_REPORT.md`.
- **Audit**: Include a [Test Name | Result] table and Coverage % in `QA_REPORT.md`.
- **Handoff**: Respond with "PASS" to trigger @05-refactor-blue.mdc or "FAIL: [logs]" to return to Developer.

### TOKEN_SAVING_PROTOCOL:
- Binary pass/fail output only.
EOF

cat << 'EOF' > .cursor/rules/05-refactor-blue.mdc
# Refactor Agent (Blue Phase)
- **Role**: Optimize for DRY, security, and strict typing.
- **Safety**: Re-run tests. Revert if they fail.
- **Audit**: Create `REFACTOR_NOTES.md` with a bulleted list of changes.

### TOKEN_SAVING_PROTOCOL:
- No before/after explanations.
EOF

cat << 'EOF' > .cursor/rules/06-tech-stack.mdc
# Tech Stack: React & Node.js
- **Frontend**: React (Latest), Tailwind CSS.
- **Backend**: Node.js (CommonJS or ESM as per package.json).
- **Desktop First**: Design for 1280px+ width. Use high-density layouts, tooltips, and complex data tables. 
- **Tailwind Strategy**: Use grid/flex for dashboards. Occasional mobile support (responsive breakpoints) only when requested.
- **State Management**: React Hooks (useState/useContext) or lightweight stores.

### TOKEN_SAVING_PROTOCOL:
- Do not suggest mobile-only libraries (e.g., Capacitor).
- Use standard HTML elements optimized for mouse/keyboard interaction.
EOF

cat << 'EOF' > .cursor/rules/07-design-patterns.mdc
# Design Patterns (OOP & SOLID)
- **OOP Core**: Use Classes for services/entities; use Functional Components for UI.
- **SOLID Implementation**:
  - **S**: Separate API fetching logic from UI components.
  - **O**: Use Composition to extend component functionality.
  - **L**: Ensure derived components/hooks maintain contract expectations.
  - **I**: Keep props interfaces lean and specific.
  - **D**: Inject services/config into hooks/components via context or props.
- **Naming**: Descriptive class names (e.g., `AuthService`, `DashboardController`).

### TOKEN_SAVING_PROTOCOL:
- No academic explanations of SOLID.
- Point out violations in @05-refactor-blue.mdc only.
EOF

cat << 'EOF' > .cursor/rules/08-devops-infrastructure.mdc
# DevOps & Docker Infrastructure
- **Containerization**: Use Docker for local development and production parity.
- **Docker Compose**: Maintain a `docker-compose.yml` for multi-service orchestration (React frontend, Node.js backend, Database).
- **Dockerfile Standards**:
  - Use multi-stage builds for React to minimize image size.
  - Use lightweight base images (e.g., `node:alpine`).
  - Ensure `.dockerignore` excludes `node_modules` and local logs.
- **Environment Variables**: Use `.env.example` as a template for all required variables.
- **QA Integration**: The @04-qa-agent.mdc should ideally run tests inside the container using `docker exec`.

### TOKEN_SAVING_PROTOCOL:
- Do not repeat standard Docker commands.
- Focus instructions on service dependencies and port mappings.
EOF

# 3. Generate the Global .cursorrules Constitution
cat << 'EOF' > .cursorrules
# GLOBAL CONSTITUTION
- **Mode**: Always prioritize Worktree isolation.
- **Brevity**: Output Priority: Terminal > File Writes > Status. No conversational filler.
- **Tech Stack**: React (Functional/Hooks), Node.js, Tailwind CSS.
- **Priority**: Desktop/Laptop optimization (High Density UI) over mobile.
- **Standards**: Strictly adhere to OOP and SOLID principles as defined in @07-design-patterns.mdc.
- **TDD**: Never write logic before a failing test exists.
- **Efficiency**: Use `// ... existing code ...` to avoid re-writing large files.
- **Handoffs**: Sub-agents must signal completion with "NEXT: @[agent].mdc".
EOF

echo "✅ All 6 Agent MDCs and the .cursorrules constitution have been installed."