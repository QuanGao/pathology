const config = {

    sample_id: undefined,

    completed: false,

    gross_features: {
        gestation_weeks: "",
        placenta_weight: "",
        hypercoiled_umbilical_cord: false
    },

    membranes: {
        maternal_immune_response: "0 – none",
        chronic_chorionitis: false,
        chronic_deciduitis_w_plasma_cells: false
    },

    umbilical_cord: {
        fetal_immune_response: "0 – none",
        vessel: {
            intramural_fibrin_deposition: "none",
            intraluminal_thrombus: {
                num_vessel: "none",
                obstructive: undefined
            }
        } 
    },

    chorionic_plate: {
        maternal_immune_response: "0 - none",
        fetal_immune_response: "none",
        chronic_chorionitis: false,
        eosinophilic_T_cell_vasculitis: false,
        vessel: {
            intramural_fibrin_deposition: "none",
            intraluminal_thrombus: {
                num_vessel: "none",
                obstructive: undefined
            }
        },
        chorionic_vascular_ectasia: false
    },

    villous_disc: {
        chronic_villitis: {
            presence: false,
            details: undefined
        }
    },

    decidua: {
        chronic_deciduitis_w_plasma_cells: false
    },

    disc: {
        stem_villous_vessel: {
            intramural_fibrin_deposition: "none",
            obliteration: false,
            intraluminal_thrombus: {
                num_vessel: "none",
                obstructive: undefined
            }
        },
        villous_stromal_vascular_karyorrhexis: {
            num_foci: "none",
            largest_focus: undefined
        },
        avascular_villi: {
            num_foci: "none",
            details: undefined
        }
    }
}

export default config;