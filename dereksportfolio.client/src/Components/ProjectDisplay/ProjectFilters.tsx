import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Project, Tag } from '../../Types/types';
import { FaCheck, FaTimes } from 'react-icons/fa';

interface FilterState {
    [key: string]: string[];
}

interface ProjectFiltersProps {
    projects: Project[];
    setFilteredProjects: React.Dispatch<React.SetStateAction<Project[]>>;
}

const ProjectFilters: React.FC<ProjectFiltersProps> = ({ projects, setFilteredProjects }) => {
    const [filters, setFilters] = useState<FilterState>({ category: ['defaultCategory'] });
    const [searchTerms, setSearchTerms] = useState<{[key: string]: string}>({});
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const dropdownRefs = useRef<{[key: string]: HTMLDivElement | null}>({});

    const allTags = useMemo(() => {
        const tags = projects.flatMap(project => project.tags);
        return Array.from(new Set(tags.map(tag => JSON.stringify(tag))))
          .map(tagString => JSON.parse(tagString) as Tag);
    }, [projects]);

    const toggleFilter = (category: string, tag: string) => {
        setFilters(prevFilters => {
          const updatedFilters = { ...prevFilters };
          if (updatedFilters[category].includes(tag)) {
            updatedFilters[category] = updatedFilters[category].filter(t => t !== tag);
          } else {
            updatedFilters[category] = [...updatedFilters[category], tag];
          }
          return updatedFilters;
        });
    };

    const handleSearchChange = (category: string, term: string) => {
        setSearchTerms(prevTerms => ({ ...prevTerms, [category]: term }));
    };

    const categories = useMemo(() => {
        const categorySet = new Set<string>();
        projects.forEach(project => {
          project.tags.forEach(tag => categorySet.add(tag.category));
        });
        return Array.from(categorySet);
    }, [projects]);

    useEffect(() => {
        const newFilters: FilterState = {};
        const newSearchTerms: {[key: string]: string} = {};
        categories.forEach(category => {
          newFilters[category] = [];
          newSearchTerms[category] = '';
        });
        setFilters(newFilters);
        setSearchTerms(newSearchTerms);
    }, [categories]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Node;
            if (activeDropdown && 
                dropdownRefs.current[activeDropdown] && 
                !dropdownRefs.current[activeDropdown]!.contains(target)) {
            setActiveDropdown(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [activeDropdown]);
    
    const removeFilter = (category: string, tag: string) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            [category]: prevFilters[category].filter(t => t !== tag)
        }));
    };

    useEffect(() => {
        const projectsFiltered = projects.filter(project => {
            return Object.entries(filters).every(([category, selectedTags]) => {
                if (selectedTags.length === 0) return true;
                    return selectedTags.every(tag =>
                        project.tags.some(projectTag => projectTag.name === tag && projectTag.category === category)
                );
            });
        });
        setFilteredProjects(projectsFiltered);
    }, [filters, projects, setFilteredProjects]);

    return (
        <div className='mt-4'>
            <div className="mb-4 flex flex-wrap gap-2 min-h-7">
                {Object.entries(filters).map(([category, tags]) =>
                tags.map(tag => (
                    <div key={`${category}-${tag}`} className="bg-pink-600 text-white px-2 sm:px-3 py-1 rounded-full flex items-center text-xs sm:text-sm">
                    <span>{tag}</span>
                    <button onClick={() => removeFilter(category, tag)} className="ml-2 hover:text-gray-200">
                        <FaTimes />
                    </button>
                    </div>
                ))
                )}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
                {categories.map(category => (
                <div key={category} className="relative">
                    <div ref={el => dropdownRefs.current[category] = el}>
                    <input
                        type="text"
                        onChange={(e) => handleSearchChange(category, e.target.value)}
                        onFocus={() => setActiveDropdown(category)}
                        placeholder={`${category.charAt(0).toUpperCase() + category.slice(1)}...`}
                        className="w-full p-2 text-xs sm:text-sm border rounded-sm bg-gray-800 text-gray-200 border-gray-700 focus:border-pink-600 focus:outline-none"
                    />
                    {activeDropdown === category && (
                        <div className="absolute z-10 w-full mt-1 bg-gray-800 border border-gray-700 rounded shadow-lg max-h-48 sm:max-h-60 overflow-y-auto">
                        {allTags
                            .filter(tag => tag.category === category)
                            .filter(tag => tag.name.toLowerCase().includes(searchTerms[category].toLowerCase()))
                            .map(tag => (
                            <div
                                key={`${tag.category}-${tag.name}`}
                                className="p-2 hover:bg-gray-700 cursor-pointer text-gray-300 flex items-center justify-between text-xs sm:text-sm"
                                onClick={() => toggleFilter(category, tag.name)}
                            >
                                <span className={filters[category].includes(tag.name) ? "text-green-400" : ''}>{tag.name}</span>
                                {filters[category].includes(tag.name) && <FaCheck className="text-green-400" />}
                            </div>
                            ))}
                        </div>
                    )}
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectFilters;