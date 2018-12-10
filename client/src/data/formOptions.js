const formOptions = {  

    membranes: {
        maternal_immune_response: [
            {
                name: "0 - none",
                value: "0 - none",
                default: true
            },
            {
                name: "1 - subchorionitis",
                value: "1 - subchorionitis",
                default: false
            },
            {
                name: "2 - chorionitis",
                value: "2 - chorionitis",
                default: false
            },
            {
                name: "3 - amnionitis with necrosis",
                value: "3 - amnionitis with necrosis",
                default: false
            }
        ]
    },

    umbilical_cord: {
        fetal_immune_response: [
            {
                name: "0 - none",
                value: "0 - none",
                default: true
            },
            {
                name: "1 - phlebitis",
                value: "1 - phlebitis",
                default: false
            },
            {
                name: "2 - arteritis",
                value: "2 - arteritis",
                default: false
            },
            {
                name: "2 - pan-vasculitis",
                value: "2 - pan-vasculitis",
                default: false
            },
            {
                name: "3 - necrotizing funisitis",
                value: "3 - necrotizing funisitis",
                default: false
            }       
        ],
        vessel: {
            intramural_fibrin_deposition: [
                {
                    name: "none",
                    value: "none",
                    default: true
                },
                {
                    name: "1 vessel",
                    value: "1 vessel",
                    default: false
                },
                {
                    name: "2 vessels", 
                    value: "2 vessels",
                    default: false
                },
                {
                    name: "3 vessels",
                    value: "3 vessels",
                    default: false
                }           
            ],
            intraluminal_thrombus: {
                num_vessel: [
                    {
                        name: "none",
                        value: "none",
                        default: true
                    },
                    {
                        name: "1 vessel",
                        value: "1 vessel",
                        default: false
                    },
                    {
                        name: "2 vessels",
                        value: "2 vessels",
                        default: false
                    },
                    {
                        name: "3 vessels",
                        value: "3 vessels",
                        default: false
                    }      
                ]
            }
        } 
    },

    chorionic_plate: {
        maternal_immune_response: [
            {
                name: "0 - none",
                value: "0 - none",
                default: true
            },
            {
                name: "1 - subchorionitis",
                value: "1 - subchorionitis",
                default: false
            },
            {
                name: "2 - chorioamnionitis",
                value: "2 - chorioamnionitis",
                default: false
            },
            {
                name: "3 - amnionitis with necrosis",
                value: "3 - amnionitis with necrosis",
                default: false
            }   
        ],
        fetal_immune_response: [
            {
                name: "0 - none",
                value: "0 - none",
                default: true
            },
            {
                name: "1 - chorionic vasculitis",
                value: "1 - chorionic vasculitis",
                default: false
            }
            
            
        ],
        vessel: {
            intramural_fibrin_deposition: [
                {
                    name: "none",
                    value: "none",
                    default: true
                },
                {
                    name: "1 vessel",
                    value: "1 vessel",
                    default: false
                },
                {
                    name: "2 vessels",
                    value: "2 vessels",
                    default: false
                },
                {
                    name: "3 vessels",
                    value: "3 vessels",
                    default: false
                },
                {
                    name: ">3 vessels",
                    value: ">3 vessels",
                    default: false
                }
            ],
            intraluminal_thrombus: {
                num_vessel: [
                    {
                        name: "none",
                        value: "none",
                        default: true
                    },
                    {
                        name: "1 vessel",
                        value: "1 vessel",
                        default: false
                    },
                    {
                        name: "2 vessels",
                        value: "2 vessels",
                        default: false
                    },
                    {
                        name: "3 vessels",
                        value:  ">3 vessels",
                        default: false
                    }
                ]
            }
        }
    },

    villous_disc: {
        chronic_villitis: {
            details: {
                villitis_largest_focus: [
                    {
                        name: "1-4",
                        value: "1-4"
                    },
                    {
                        name: "5-9",
                        value: "5-9"
                    },
                    {
                        name: "10-20",
                        value: "10-20"
                    },
                    {
                        name: "20-50",
                        value: "20-50"
                    },
                    {
                        name: "50-100",
                        value: "50-100"
                    },
                    {
                        name: ">100",
                        value: ">100"
                    }
                ],
                villitis_num_foci: [
                    {
                        name: "none",
                        value: "none"
                    },
                    {
                        name: "single",
                        value: "single"
                    },
                    {
                        name: "few",
                        value: "few"
                    },
                    {
                        name: "many",
                        value: "many"
                    },
                    {
                        name: "diffuse",
                        value: "diffuse"
                    } 
                ],
                location: [
                    {
                        name: "parabasal", 
                        value: "parabasal"
                    },
                    {
                        name: "paraseptal", 
                        value: "paraseptal"
                    },
                    {
                        name: "mid parenchymal", 
                        value: "mid parenchymal"
                    },
                    {
                        name: "subchorionic",
                        value: "subchorionic"
                    }
                ],
                CMV_immunostain: [
                    {
                        name: "NA",
                        value: "NA"
                    },
                    {
                        name: "negative",
                        value: "negative"
                    },
                    {
                        name: "positive",
                        value: "positive"
                    }
                ],
                toxoplasma_immunostain: [
                    {
                        name: "NA",
                        value: "NA"
                    },
                    {
                        name: "negative",
                        value: "negative"
                    },
                    {
                        name: "positive",
                        value: "positive"
                    }
                ]
            }
        }
    },

    disc: {
        stem_villous_vessel: {
            intramural_fibrin_deposition: [
                {
                    name: "none",
                    value: "none",
                    default: true
                },
                {
                    name: "1 vessel",
                    value: "1 vessel",
                    default: false
                },
                {
                    name: "2 vessels",
                    value: "2 vessels",
                    default: false
                },
                {
                    name: "3 vessels",
                    value: "3 vessels",
                    default: false
                },
                {
                    name: ">3 vessels",
                    value: ">3 vessels",
                    default: false
                }
            ],
            intraluminal_thrombus: {
                num_vessel: [
                    { 
                        name: "none",
                        value: "none",
                        default: true
                    },
                    {
                        name: "1 vessel",
                        value: "1 vessel",
                        default: false
                    },
                    {
                        name: "2 vessels",
                        value: "2 vessels",
                        default: false
                    },
                    {
                        name: "3 vessels",
                        value: "3 vessels",
                        default: false
                    },
                    {
                        name: ">3 vessels",
                        value: ">3 vessels",
                        default: false
                    }
                ]
            }
        },
        villous_stromal_vascular_karyorrhexis: {
            num_foci: [
                {
                    name: "none",
                    value: "none",
                    default: true
                },
                {
                    name: "few",
                    value: "few",
                    default: false
                },
                {
                    name: "many",
                    value: "many",
                    default: false
                },
                {
                    name: "diffuse",
                    value: "diffuse",
                    default: false
                }      
            ],
            largest_focus: [
                {
                    name: "3",
                    value: "3",
                    default: false
                },
                {
                    name: "4-9", 
                    value: "4-9",
                    default: false
                },
                {
                    name: "10-25", 
                    value: "10-25",
                    default: false
                },
                {
                    name: "26-50", 
                    value: "26-50",
                    default: false
                },
                {
                    name: ">50",
                    value: ">50",
                    default: false
                },
                {
                    name: "regional",
                    value: "regional",
                    default: false
                }      
            ]
        },
        avascular_villi: {
            num_foci: [
                {
                    name: "none",
                    value: "none",
                    default: true
                },
                {
                    name: "few",
                    value: "few",
                    default: false
                },
                {
                    name: "many",
                    value: "many",
                    default: false
                },
                {
                    name: "diffuse",
                    value: "diffuse",
                    default: false
                }    
            ],
            details: {
                largest_focus: [
                    {
                        name: "3",
                        value: "3",
                        default: false
                    },
                    {
                        name: "4-9", 
                        value: "4-9",
                        default: false
                    },
                    {
                        name: "10-25", 
                        value: "10-25",
                        default: false
                    },
                    {
                        name: "26-50", 
                        value: "26-50",
                        default: false
                    },
                    {
                        name: ">50",
                        value: ">50",
                        default: false
                    },
                    {
                        name: "regional",
                        value: "regional",
                        default: false
                    }   
                ],
                total_num: [
                    {
                        name: "less than 45",
                        value: "<45",
                        default: false
                    },
                    {
                        name: "more than 45",
                        value: ">45",
                        default: false
                    }      
                ]
            }
        }
    }
}
export default formOptions;
    
    