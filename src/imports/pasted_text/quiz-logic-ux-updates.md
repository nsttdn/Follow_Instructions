FIGMA MAKE - MAJOR CORRECTIONS TO QUIZ LOGIC & UX

=== CORRECTION 1: Q2_CREATOR LOGIC ISSUE ===
Current question: "Do you currently monetize your content?"
Problem: Patreon itself IS monetization. This question is confusing.

NEW APPROACH:
Skip the monetization question entirely.
Q2_Creator should directly ask: "Do you sell merchandise?"

NEW Q2_CREATOR:
"Do you sell merchandise to your audience?"
Options (single select):
- ✅ Yes, I already sell merch → Q3A (which platforms)
- 🤔 Thinking about it → Q3B (concerns/barriers)
- ➕ No, but interested → Q3C (fears)
- ❌ Not interested → CREATOR THANK YOU

This is cleaner and makes sense.

=== CORRECTION 2: IF "NO, NOT YET" FLOWS ===
Current: "What's stopping you from monetizing?" after No
Problem: User selected "not interested" or "no" - need different questions

NEW FLOWS for rejected paths:

If Q2_Creator = "Not interested":
→ CREATOR THANK YOU STEPS (they can still learn about Hub benefits)

If Q2_Creator = "No, but interested":
→ Q3C: "What scares you most about selling merch?"
(Already in place, no change needed)

If Q2_Creator = "Thinking about it":
→ Q3B: Show benefits card + ask about concerns
→ Then to Q3C (fears)

=== CORRECTION 3: AFTER "YES" (ALREADY SELLING) ===
Current path: Q3A → Q4A (platforms question)
Update: Keep same but ensure it leads to:
Q4A: "Which platforms do you currently use?"
Then: Q5A: "Would you consolidate to one?"
Then: CREATOR THANK YOU

No changes needed here, just verify flow is correct.

=== CORRECTION 4: MULTIPLE-SELECT ON ALL BARRIER QUESTIONS ===
Current: Single-select on barrier/concern questions
Update: Change to MULTI-SELECT (user can select multiple concerns/barriers)

Questions that need MULTI-SELECT:

1. Q3B: "What's stopping you from monetizing?" (if Q2 = No yet)
   Options (MULTI-SELECT):
   - 👥 Audience too small
   - 🧩 Too complicated technically
   - 📚 Don't know where to start
   - ⏰ Too busy with content
   - 🤷 Haven't thought about it
   [Continue] button

2. Q4B: "What concerns do you have about selling merch?" (if Q3A = Thinking)
   Options (MULTI-SELECT):
   - 🚚 Production & fulfillment logistics
   - 💰 Upfront inventory costs
   - 🧠 Too complicated to manage
   - 📢 Don't know how to market it
   - ⚠️ Quality concerns
   [Continue] button

3. Q4C: "What scares you most about selling merch?" (if Q3A = No/interested)
   Options (MULTI-SELECT):
   - 🆘 Don't know where to start
   - 🚚 Logistics & shipping
   - 📦 Managing inventory
   - 💸 Pricing & competition
   - 🤝 Customer support
   [Continue] button

4. Q3C: "What's your primary revenue goal?" (if Q2 = Maybe)
   Options (MULTI-SELECT):
   - 💰 Monthly recurring income
   - 🛍️ One-time merch sales
   - 📊 Diversify streams
   - 🎯 Test approaches
   [Continue] button

5. PATRON SECTION - Q4B: "What would make you buy more creator merch?"
   Options (MULTI-SELECT):
   - ⏰ Limited edition drops
   - 🔐 Exclusive for members
   - 💳 Better pricing/bundles
   - 🎨 More variety
   - ⭐ Better quality
   [Continue] button

6. PATRON SECTION - Q4C: "Why haven't you bought?"
   Options (MULTI-SELECT):
   - 😕 Didn't know they sold
   - 💸 Too expensive
   - 🚚 Shipping costs high
   - ⚠️ Quality concerns
   - 🤷 Not sure where to find
   [Continue] button

=== CORRECTION 5: ADD EMOJIS TO ALL QUESTIONS ===
Current state: Some questions have emojis, some don't
Update: Add emoji icons to EVERY question option card for consistency

Examples of what to add emojis to:

Q2_PATRON: "What type of creators do you follow?"
- 🎮 Gaming
- 🎨 Art
- 🎙️ Podcasts
- ✍️ Writing
- 🎵 Music
- 📚 Education

Make sure ALL option cards have relevant emoji icons.

Consistency rule: Every single option card on every question should have an emoji.

=== CORRECTION 6: SPECIFIC PATRON QUESTION UPDATES ===
Q2_PATRON: "What type of creators do you follow?"
Already has good structure, just ensure:
- Add emojis (as listed above)
- MULTI-SELECT (already correct)
- Show checkmarks when selected
- [Continue] button

=== REVISED CREATOR PATH LOGIC ===

Hero → Q0 (Familiar?) → Q1 (Creator/Patron?)
↓
Q2_Creator: "Do you sell merchandise to your audience?"
├─ ✅ Yes, already → Q4A: Platforms (multi-select) → Q5A: Consolidate? → Thank You
├─ 🤔 Thinking → Q4B: Concerns (multi-select) + Benefits card → Q4C: Fears (multi-select) → Thank You
├─ ➕ No, but interested → Q4C: Fears (multi-select) → Thank You
└─ ❌ Not interested → Thank You

=== REVISED PATRON PATH LOGIC ===

Q1: Creator/Patron?
↓
Q2_Patron: "What type of creators do you follow?" (multi-select with emojis)
↓
Q3_Patron: "Do you buy merchandise from creators?"
├─ ✅ Yes, regularly → Q4A_Merch: Type (multi-select with emojis) → Thank You
├─ 🤔 Sometimes → Q4B_Incentives: (multi-select with emojis) → Thank You
├─ ❌ Never → Q4C_Why: (multi-select with emojis) → Thank You
└─ 😮 Didn't know → Q4D_Discover: Show collections → Thank You

=== VISUAL CONSISTENCY RULE ===

EVERY option card must have:
- Emoji icon (left side)
- Text label (main content)
- Checkmark when selected (right side, only when selected)
- Purple border when selected
- Consistent spacing: 12px between cards
- Consistent font: 14px, white, regular

Example of properly formatted option card:
"🎮 Gaming"
with checkmark visible when selected, purple border

=== IMPLEMENTATION CHECKLIST ===

✓ Simplify Q2_Creator: Remove monetization, ask about merch directly
✓ Fix "No" paths: If not interested → Thank You; If no but interested → Fears question
✓ Add MULTI-SELECT to all barrier/fear/concern questions (6 questions total)
✓ Add emojis to EVERY option card across all questions
✓ Ensure emoji-text-checkmark layout consistent everywhere
✓ Test all conditional logic flows
✓ Verify checkmarks appear/disappear correctly on multi-select
✓ Mobile responsive with emojis properly aligned

=== SUMMARY OF CHANGES ===

1. Q2_Creator: Remove monetization ask, ask about merch directly ✓
2. Multi-select on: Q3B, Q4B, Q4C, Q3C, Q4B_Patron, Q4C_Patron ✓
3. Add emojis to EVERY question option card for visual consistency ✓
4. Revise logic flows to match new question structure ✓
5. All other questions remain same, just add multi-select capability ✓

Ready to implement!