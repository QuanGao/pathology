const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FormSchema = new Schema({  
    sample_id: {
        type: String,
        unique: true,
        index: true,
        trim: true,
        uppercase: true
    },
    completed: {
        type: Boolean
    },
    gross_features: {
        gestation_weeks: {
            type: String
        },
        placenta_weight: {
            type: String
        },
        hypercoiled_umbilical_cord: {
            type: Boolean
        }
    },

    membranes: {
        maternal_immune_response: {
            type: String
        },
        chronic_chorionitis: {
            type: Boolean
        },
        chronic_deciduitis_w_plasma_cells: {
            type: Boolean
        }
    },

    umbilical_cord: {
        fetal_immune_response: {
            type: String
        },
        vessel: {
            intramural_fibrin_deposition: {
                type: String
            },
            intraluminal_thrombus: {
                num_vessel: {
                    type: String
                },
                obstructive: {
                    type: Boolean
                }
            }
        } 
    },

    chorionic_plate: {
        maternal_immune_response: {
            type: String
        },
        fetal_immune_response: {
            type: String
        },
        chronic_chorionitis: {
            type: Boolean
        },
        eosinophilic_T_cell_vasculitis: {
            type: Boolean
        },
        vessel: {
            intramural_fibrin_deposition: {
                type: String
            },
            intraluminal_thrombus: {
                num_vessel: {
                    type: String
                },
                obstructive: {
                    type: Boolean
                }
            }
        },
        chorionic_vascular_ectasia: {
            type: Boolean
        }
    },

    villous_disc: {
        chronic_villitis: {
            presence: {
                type: Boolean
            },
            details: {
                villitis_largest_focus: {
                    type: String
                },
                villitis_num_foci: {
                    type: String
                },
                location: Array,
                associated_avascular_villi: {
                    type: Boolean
                },
                associated_stem_vessel_obliterative_changes: {
                    type: Boolean
                },
                viral_inclusions: {
                    type: Boolean
                },
                CMV_immunostain: {
                    type: String
                },
                toxoplasma_immunostain: {
                    type: String
                }
            }
        }
    },

    decidua: {
        chronic_deciduitis_w_plasma_cells: {
            type: Boolean
        }
    },

    disc: {
        stem_villous_vessel: {
            intramural_fibrin_deposition: {
                type: String
            },
            obliteration: {
                type: Boolean
            },
            intraluminal_thrombus: {
                num_vessel: {
                    type: String
                },
                obstructive: {
                    type: Boolean
                }
            }
        },
        villous_stromal_vascular_karyorrhexis: {
            num_foci: {
                type: String
            },
            largest_focus: {
                type: String
            }
        },
        avascular_villi: {
            num_foci: {
                type: String
            },
            details: {
                largest_focus: {
                    type: String
                },
                total_num: {
                    type: String
                }
            }
        }
    }

    },{
        timestamps: true
    })
    
    const Form = mongoose.model("Form", FormSchema);
    module.exports = Form;
    
    