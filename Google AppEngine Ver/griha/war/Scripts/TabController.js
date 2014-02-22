
function projectDetailTabCtrl($scope){
	$scope.tabs = [
	               { title:"Project Description", content:"Project Description", active: true },
	               { title:"Specification", content:"Project Specification", disabled: true }
	];

	$scope.specs = [
        {
            title: "Structure",
            contents :
                [
                    {
                        name: "Seismic Zone II compliant RCC framed structure."
                    },
                    {
                        name: "high quality brick work Masonry"
                    },
                    {
                        name: "Staircase- Folded plate RCC staircase with marble, Wooden railing"
                    }
                ]
        },
        {
            title: "Plastering",
            contents :
                [
                    {
                        name: "All internal walls are smoothly plastered"
                    }
                ]
        },
        {
            title: "Painting",
            contents:
                [
                    {
                        name: "Interior: Acrylic emulsion paint with roller finish"
                        
                    },
                    {
                        name: "Exterior: Maintenance free texture paint or other equivalent solution as per Façade"
                    }
                ]
        },
        {
            title: "Flooring",
            contents:
                [
                    {
                        name: "Vitrified tile flooring in living, dining and family areas"
                    },
                    {
                        name: "Master Bedroom - Laminated Wooden flooring in master bedrooms"
                    }
                ]
        }
	];

}
