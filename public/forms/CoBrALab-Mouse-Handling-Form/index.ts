/* eslint-disable perfectionist/sort-objects */

const { defineInstrument } = await import('/runtime/v1/@opendatacapture/runtime-core/index.js');
const { z } = await import('/runtime/v1/zod@3.23.x/index.js');

export default defineInstrument({
  kind: 'FORM',
  language: 'en',
  tags: ['Handling','Cupping','Training'],
  internal: {
    edition: 2,
    name: 'MOUSE_HANDLING_FORM'
  },
  clientDetails: {
    estimatedDuration: 1,
    instructions: ['Please fill out this form once a mouse finishes a handling session. During a handling session day this form is expected to done a total of three times for each individual session completed. All forms of handling used by the handler are all expected to be within the SOP'],
    
  },
  content: {
    roomNumber: {
      kind: 'string',
      variant: "input",
      label: "Room number"
    },
    handlingType: {
      kind: 'string',
      variant: "radio",
      label: "Form of handling",
      options: {
        "Tail grabbing": "Tail grabbing",
        "Cupping": "Cupping",
        "Tube method": "Tube method"
      }
    },
    handlingDuration: {
      kind: "number",
      variant: "input",
      label: "Duration (minutes)"
    },
    additionalComments: {
      kind: "string",
      variant: "textarea",
      label: "Additional Comments"
    }
  },
  details: {
    description: 'Describes when an animal was handled, its current handling session, and the handling method used.',
    license: 'Apache-2.0',
    title: 'Mouse Handling Form'
  },
  measures: {
    roomNumber: {
      kind: 'const',
      label: "Room number",
      ref: "roomNumber"
    },
     handlingType: {
      kind: 'const',
      label: "Form of handling",
      ref: "handlingType"
    },
    handlingDuration: {
      kind: 'const',
      label: "Duration (minutes)",
      ref: "handlingDuration"
    },
    additionalComments: {
      kind: "const",
      ref: "additionalComments"
    }
  },
  validationSchema: z.object({
    roomNumber: z.string(),
    handlingType: z.enum(["Tail grabbing","Cupping","Tube method"]),
    handlingDuration: z.number().min(0),
    additionalComments: z.string().optional()
  })
});
